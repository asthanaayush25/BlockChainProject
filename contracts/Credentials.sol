// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract Credentials {
  address public school;

  struct info {
    string Name;
  }

  mapping(address => info) public student;
  

  

  constructor() public {
    school=msg.sender;
    }
  

  function registration(address std,string calldata name) external payable {
      require(msg.sender == school);
      student[std].Name=name;
  }
  function check(address std) public view returns (string memory){
      return student[std].Name;
  }
}