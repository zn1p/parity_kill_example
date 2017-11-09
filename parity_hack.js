
let Web3 = require('web3');

//Change HTTP provider if needed.
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//ABI definition form https://etherscan.io/address/0x863df6bfa4469f3ead0be8f9f2aae51c91a907b4



let abiDefinition  = [{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_limit","type":"uint256"}],"name":"initDaylimit","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"o_hash","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"ownerIndex","type":"uint256"}],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"}],"name":"initMultiowned","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"name":"initWallet","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"created","type":"address"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"created","type":"address"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}],
	//byteCode from https://etherscan.io/address/0x863df6bfa4469f3ead0be8f9f2aae51c91a907b4
	byteCode = "6060604052341561000c57fe5b5b61170f8061001c6000396000f300606060405236156101015763ffffffff60e060020a600035041663173825d981146101575780632f54bf6e146101755780634123cb6b146101a557806352375093146101c75780635c52c2f5146101e9578063659010e7146101fb5780637065cb481461021d578063746c91711461023b578063797af6271461025d5780639da5e0eb14610284578063b20d30a914610299578063b61d27f6146102ae578063b75c7dc6146102ec578063ba51a6df14610301578063c2cf732614610316578063c41a360a14610349578063c57c5f6014610378578063cbf0b0c0146103cf578063e46dcfeb146103ed578063f00d4b5d14610449578063f1736d861461046d575b6101555b60003411156101525760408051600160a060020a033316815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b5b565b005b341561015f57fe5b610155600160a060020a036004351661048f565b005b341561017d57fe5b610191600160a060020a036004351661057d565b604080519115158252519081900360200190f35b34156101ad57fe5b6101b561059e565b60408051918252519081900360200190f35b34156101cf57fe5b6101b56105a4565b60408051918252519081900360200190f35b34156101f157fe5b6101556105aa565b005b341561020357fe5b6101b56105e1565b60408051918252519081900360200190f35b341561022557fe5b610155600160a060020a03600435166105e7565b005b341561024357fe5b6101b56106d7565b60408051918252519081900360200190f35b341561026557fe5b6101916004356106dd565b604080519115158252519081900360200190f35b341561028c57fe5b610155600435610a30565b005b34156102a157fe5b610155600435610a56565b005b34156102b657fe5b6101b560048035600160a060020a0316906024803591604435918201910135610a8e565b60408051918252519081900360200190f35b34156102f457fe5b610155600435610d71565b005b341561030957fe5b610155600435610e1c565b005b341561031e57fe5b610191600435600160a060020a0360243516610e9e565b604080519115158252519081900360200190f35b341561035157fe5b61035c600435610ef3565b60408051600160a060020a039092168252519081900360200190f35b341561038057fe5b6101556004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496505093359350610f1492505050565b005b34156103d757fe5b610155600160a060020a0360043516610ff9565b005b34156103f557fe5b6101556004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496505084359460200135935061103792505050565b005b341561045157fe5b610155600160a060020a0360043581169060243516611062565b005b341561047557fe5b6101b561115c565b60408051918252519081900360200190f35b60006000366040518083838082843782019150509250505060405180910390206104b881611162565b1561057657600160a060020a0383166000908152610105602052604090205491508115156104e557610576565b60016001540360005411156104f957610576565b6000600583610100811061050957fe5b0160005b5055600160a060020a038316600090815261010560205260408120556105316112cd565b6105396113bd565b60408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b5b5b505050565b600160a060020a03811660009081526101056020526040812054115b919050565b60015481565b60045481565b6000366040518083838082843782019150509250505060405180910390206105d181611162565b156105dc5760006003555b5b5b50565b60035481565b60003660405180838380828437820191505092505050604051809103902061060e81611162565b156106d15761061c8261057d565b15610626576106d1565b61062e6112cd565b60015460fa9010610641576106416113bd565b5b60015460fa9010610652576106d1565b60018054810190819055600160a060020a03831690600590610100811061067557fe5b0160005b5055600154600160a060020a03831660008181526101056020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a15b5b5b5050565b60005481565b60006000826106eb81611162565b15610a265760008481526101086020526040902054600160a060020a031615158061072757506000848152610108602052604090206001015415155b80610754575060008481526101086020526040902060029081015461010060018216150260001901160415155b15610a265760008481526101086020526040902054600160a060020a0316151561082c57600084815261010860209081526040918290206001808201546002928301805486516000199482161561010002949094011693909304601f810185900485028301850190955284825261082594909391929183018282801561081b5780601f106107f05761010080835404028352916020019161081b565b820191906000526020600020905b8154815290600101906020018083116107fe57829003601f168201915b50505050506114f9565b91506108e4565b60008481526101086020526040908190208054600180830154935160029384018054600160a060020a0390941695949093919283928592918116156101000260001901160480156108be5780601f10610893576101008083540402835291602001916108be565b820191906000526020600020905b8154815290600101906020018083116108a157829003601f168201915b505091505060006040518083038185876185025a03f19250505015156108e45760006000fd5b5b6000848152610108602090815260409182902060018082015482548551600160a060020a033381811683529682018c90529681018390529086166060820181905295881660a082015260c06080820181815260029586018054958616156101000260001901909516959095049082018190527fe3a3a4111a84df27d76b68dc721e65c7711605ea5eee4afd3a9c58195217365c968b959394909390928a9290919060e0830190859080156109da5780601f106109af576101008083540402835291602001916109da565b820191906000526020600020905b8154815290600101906020018083116109bd57829003601f168201915b505097505050505050505060405180910390a16000848152610108602052604081208054600160a060020a03191681556001810182905590610a1f600283018261158e565b5050600192505b5b5b5b5050919050565b60006001541115610a415760006000fd5b6002819055610a4e611513565b6004555b5b50565b600036604051808383808284378201915050925050506040518091039020610a7d81611162565b156106d15760028290555b5b5b5050565b60006000610a9b3361057d565b15610d645782158015610ab25750610ab285611522565b5b80610ac057506000546001145b15610c0357600160a060020a0386161515610b1657610b0f8585858080601f016020809104026020016040519081016040528093929190818152602001838380828437506114f9945050505050565b9050610b57565b85600160a060020a03168585856040518083838082843782019150509250505060006040518083038185876185025a03f1925050501515610b575760006000fd5b5b7f9738cd1a8777c86b011f7b01d87d484217dc6ab5154a9d41eda5d14af8caf2923386888787866040518087600160a060020a0316600160a060020a0316815260200186815260200185600160a060020a0316600160a060020a031681526020018060200183600160a060020a0316600160a060020a0316815260200182810382528585828181526020019250808284376040519201829003995090975050505050505050a1610d64565b600036436040518084848082843791909101928352505060408051602092819003830190206000818152610108909352912054909450600160a060020a0316159150508015610c62575060008281526101086020526040902060010154155b8015610c8f5750600082815261010860205260409020600290810154610100600182161502600019011604155b15610cd3576000828152610108602052604090208054600160a060020a031916600160a060020a03881617815560018101869055610cd19060020185856115d6565b505b610cdc826106dd565b1515610d645760408051838152600160a060020a033381811660208401529282018890528816606082015260a0608082018181529082018690527f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf32928592909189918b918a918a9160c082018484808284376040519201829003995090975050505050505050a15b5b5b5b5b50949350505050565b600160a060020a033316600090815261010560205260408120549080821515610d9957610e15565b50506000828152610106602052604081206001810154600284900a929083161115610e155780546001908101825581018054839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b5b50505050565b600036604051808383808284378201915050925050506040518091039020610e4381611162565b156106d157600154821115610e57576106d1565b6000829055610e646112cd565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15b5b5b5050565b600082815261010660209081526040808320600160a060020a038516845261010590925282205482811515610ed65760009350610eea565b8160020a9050808360010154166000141593505b50505092915050565b60006005600183016101008110610f0657fe5b0160005b505490505b919050565b600060006001541115610f275760006000fd5b825160019081018155600160a060020a033316906005905b0160005b505550600160a060020a033316600090815261010560205260408120600190555b8251811015610fed578281815181101515610f7b57fe5b60209081029091010151600160a060020a03166005600283016101008110610f9f57fe5b0160005b50819055508060020161010560008584815181101515610fbf57fe5b90602001906020020151600160a060020a03168152602001908152602001600020819055505b600101610f64565b60008290555b5b505050565b60003660405180838380828437820191505092505050604051809103902061102081611162565b156106d15781600160a060020a0316ff5b5b5b5050565b600060015411156110485760006000fd5b61105181610a30565b6105768383610f14565b5b5b505050565b600060003660405180838380828437820191505092505050604051809103902061108b81611162565b15610e15576110998361057d565b156110a357610e15565b600160a060020a0384166000908152610105602052604090205491508115156110cb57610e15565b6110d36112cd565b600160a060020a03831660058361010081106110eb57fe5b0160005b5055600160a060020a0380851660008181526101056020908152604080832083905593871680835291849020869055835192835282015281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a15b5b5b50505050565b60025481565b600160a060020a03331660009081526101056020526040812054818082151561118a576112c3565b600085815261010660205260409020805490925015156111ed576000805483556001808401919091556101078054916111c591908301611655565b60028301819055610107805487929081106111dc57fe5b906000526020600020900160005b50555b8260020a905080826001015416600014156112c35760408051600160a060020a03331681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a18154600190116112b057600085815261010660205260409020600201546101078054909190811061127357fe5b906000526020600020900160005b5060009081905585815261010660205260408120818155600180820183905560029091019190915593506112c3565b8154600019018255600182018054821790555b5b5b505050919050565b6101075460005b818110156113ab576101086000610107838154811015156112f157fe5b906000526020600020900160005b50548152602081019190915260400160009081208054600160a060020a03191681556001810182905590611336600283018261158e565b505061010780548290811061134757fe5b906000526020600020900160005b5054156113a25761010660006101078381548110151561137157fe5b906000526020600020900160005b505481526020810191909152604001600090812081815560018101829055600201555b5b6001016112d4565b6106d1610107600061167f565b5b5050565b60015b6001548110156105dc575b600154811080156113ee575060058161010081106113e557fe5b0160005b505415155b156113fb576001016113cb565b5b60016001541180156114225750600154600590610100811061141a57fe5b0160005b5054155b1561143657600180546000190190556113fb565b6001548110801561145c5750600154600590610100811061145357fe5b0160005b505415155b80156114795750600581610100811061147157fe5b0160005b5054155b156114f057600154600590610100811061148f57fe5b0160005b505460058261010081106114a357fe5b0160005b505580610105600060058361010081106114bd57fe5b0160005b505481526020019081526020016000208190555060006005600154610100811015156114e957fe5b0160005b50555b6113c0565b5b50565b600081516020830184f09050803b15610000575b92915050565b600062015180425b0490505b90565b600061152d3361057d565b156105995760045461153d611513565b1115611554576000600355611550611513565b6004555b6003548281011080159061156e5750600254826003540111155b15611583575060038054820190556001610599565b5060005b5b5b919050565b50805460018160011615610100020316600290046000825580601f106115b457506105dc565b601f0160209004906000526020600020908101906105dc91906116a1565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106116175782800160ff19823516178555611644565b82800160010185558215611644579182015b82811115611644578235825591602001919060010190611629565b5b506116519291506116a1565b5090565b815481835581811511610576576000838152602090206105769181019083016116a1565b5b505050565b50805460008255906000526020600020908101906105dc91906116a1565b5b50565b61151f91905b8082111561165157600081556001016116a7565b5090565b90565b61151f91905b8082111561165157600081556001016116a7565b5090565b905600a165627a7a723058209a3af51063f944081cd5ee8601e4e655f25cf7bc219a7983cda60f163f1709a70029",
	//default eht address to play with
	default_eht_account = web3.eth.accounts[0];

console.log(`All comands will be send from: ${default_eht_account} \r\n`)


let contract = web3.eth.contract(abiDefinition);

//Deploy contract with null
let deployed = new Promise((res,rej)=>{
	contract.new(null,{data:byteCode,from:default_eht_account ,gas:4700000},(err,contract)=>{
		if(err){
			rej(err)
		}
		else if(contract.address){
			res(contract)
		}
		})
})


//after contract is deployed
deployed.then(deployed_Contract=>{
	console.log(`Contract address is: ${deployed_Contract.address} \r\n`)
	//create contract instance
	let Contract_instance =  contract.at(deployed_Contract.address);

	console.log(`Is ${default_eht_account} an owner of contract ${deployed_Contract.address} : ${Contract_instance.isOwner(default_eht_account)} \r\n`)
	console.log(`Executing initWallet on address ${deployed_Contract.address} \r\n`)
	//get method data..
	let InitWallet_get_data = Contract_instance.initWallet.getData([default_eht_account],1,1);
	//call method as txn
	web3.eth.sendTransaction({to:deployed_Contract.address, from:web3.eth.accounts[0], data: InitWallet_get_data,gas:4700000});
	//check result
	console.log(`Is ${default_eht_account} an owner of contract ${deployed_Contract.address} : ${Contract_instance.isOwner(default_eht_account)} \r\n `)
	//kill...
	console.log(`killing the contract ${deployed_Contract.address} \r\n`)
	
	let kill_get_data = Contract_instance.kill.getData(default_eht_account);
	
	web3.eth.sendTransaction({to:deployed_Contract.address, from:default_eht_account, data: kill_get_data,gas:4700000});
	//Trying to call isOwner again if contract is dead it will throw an error...
	Contract_instance.isOwner(default_eht_account,(err,res)=>{
		if(err){
			console.log(`I accidentally killed it. (${deployed_Contract.address})\r\n`)
			return;
		}
		console.log(`Something went fron and contract is still alive`)
	})



})








