// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "forge-std/Test.sol";
import "../src/SkillBadge.sol";

contract SkillBadgeTest is Test {
    SkillBadge public skillBadge;
    address public user = address(1);

    function setUp() public {
        skillBadge = new SkillBadge();
    }

    function testMintBadge() public {
        string memory achievement = "Completed 10 Projects";
        
        vm.prank(user);
        skillBadge.mintBadge(user, achievement);

        (string memory storedAchievement, uint256 timestamp) = skillBadge.getBadge(user);
        
        assertEq(storedAchievement, achievement);
        assertTrue(timestamp > 0);
        assertTrue(skillBadge.hasBadge(user));
    }

    function testCannotMintDuplicate() public {
        string memory achievement = "First";
        
        vm.prank(user);
        skillBadge.mintBadge(user, achievement);

        vm.expectRevert(SkillBadge.BadgeAlreadyExists.selector);
        vm.prank(user);
        skillBadge.mintBadge(user, "Second");
    }
}
