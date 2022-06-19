// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract Credentials {
  address public school;

  struct info {
    bytes32 Name;
  }

  mapping(address => info) public student;
  

  

  constructor() public{
    school=msg.sender;
    }
  

  function registration(address std,string memory name,uint num) public {
      require(msg.sender==school);
      student[std].Name=(keccak256(abi.encodePacked(name,num,std)));
  }
  function check(address std) public view returns (bytes32){
      return student[std].Name;
  }
}