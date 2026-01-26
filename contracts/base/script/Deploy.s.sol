// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Script.sol";
import "../src/SkillBadge.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);

        SkillBadge skillBadge = new SkillBadge();
        
        console.log("SkillBadge deployed to:", address(skillBadge));

        vm.stopBroadcast();
    }
}
