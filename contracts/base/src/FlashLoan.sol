// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface IFlashLoanReceiver {
    function executeOperation(uint256 amount, uint256 fee, bytes calldata params) external;
}

contract FlashLoan {
    uint256 public poolBalance;
    uint256 public constant FEE_PERCENT = 1; // 0.1%
    
    event LoanExecuted(address indexed borrower, uint256 amount, uint256 fee);
    event PoolDeposit(address indexed provider, uint256 amount);

    function deposit() external payable {
        poolBalance += msg.value;
        emit PoolDeposit(msg.sender, msg.value);
    }

    function flashLoan(uint256 amount, bytes calldata params) external {
        require(amount <= poolBalance, "Insufficient liquidity");
        
        uint256 balanceBefore = address(this).balance;
        uint256 fee = (amount * FEE_PERCENT) / 1000;
        
        poolBalance -= amount;
        payable(msg.sender).transfer(amount);
        
        IFlashLoanReceiver(msg.sender).executeOperation(amount, fee, params);
        
        require(address(this).balance >= balanceBefore + fee, "Loan not repaid");
        poolBalance += amount + fee;
        
        emit LoanExecuted(msg.sender, amount, fee);
    }

    function getPoolBalance() external view returns (uint256) {
        return poolBalance;
    }
}
