"use client"
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const MetaverseQ4 = () => {
  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "https://i.ibb.co/b7jQhWH/9c89339c8e28528431bd62386c803d1a.png"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"gray.800"}
              px={[2, 12, 12]}
              mt={8}
              mb={3}
            >
              Quarter IV (Web3 and Metaverse)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Stack
        backgroundColor={"green.100"}
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Box bg={"green.100"} p={[2, 4]}>
          <VStack align="stretch" spacing={4}>
            <Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"green.700"}
              px={[2, 12, 12]}
              mt={8}
              mb={3}
            >
              Detailed Course Syllabus:
            </Heading>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mb={-96}
            >
              Duration: 13 Weeks
              <br />
              <br />
              Course Description:
              <br />
              <br />
              In this course you will learn how to develop Web 3.0 DApps, create
              a project, deploy it in production, write smart contracts, unit
              test them, and create user interfaces for them. We will also learn
              to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note
              that in order to develop Web 3 applications you also need to build
              on top of Web 2.0 technologies which we have already covered in
              the previous quarters.
            </Text>
            <Link href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                The reasons for learning Web 2 before Web 3
              </Text>
            </Link>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  alt={"Metaverse Image"}
                  objectFit={"cover"}
                  width="50%"
                  maxW="100%"
                  height={"auto"}
                  src={
                    "https://i.ibb.co/xFtvf38/Pngtree-virtual-reality-game-console-6979405.png"
                  }
                />
              </div>
            </Box>
            <Box w={'100%'} h={'auto'} bg={'teal.100'} border={'1px'} borderColor={'green.100'} borderRadius={'26'} boxShadow={'lg'} mt={20}>
              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={"green.700"}
                px={[2, 12]}
                mt={8}
                mb={4}
              >
                Course Outline:
              </Heading>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
              >
                Blockchain and Metaverse Theory
              </Heading>
              <Box>
                <Link href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="blue.600"
                    mt={-1}
                  >
                    The Metaverse: And How It Will Revolutionize Everything by
                    Matthew Ball
                  </Text>
                </Link>
                <Link href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="blue.600"
                    mt={-1}
                  >
                    Mastering Blockchain - Fourth Edition by Imran Bashir
                  </Text>
                </Link>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Smart Contract Development in Solidity
              </Heading>
              <Box>
                <Link href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="blue.600"
                    mt={-1}
                  >
                    Solidity Programming Essentials - Second Edition By Ritesh
                    Modi
                  </Text>
                </Link>
                <Link href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts">
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="blue.600"
                    mt={-1}
                  >
                    Solidity Learning Repo
                  </Text>
                </Link>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Dapp Development using Ethers.js and Next.js 13
              </Heading>
              <Box>
                <Link href="https://github.com/panaverse/dapps-nextjs">
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="blue.600"
                    mt={-1}
                  >
                    Dapp Learning Repo
                  </Text>
                </Link>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Tokennomics
              </Heading>
              <Box>
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={-1}
                >
                  Blockchain Project: Create a Token and Launch ICO/IEO/IDO
                  <br />
                  <br />
                  As you probably know, the ICO (&quot;Initial Coin
                  Offering&quot;) industry has been booming, and it&apos;s
                  completely reinventing the way new startups kickstart
                  themselves. In fact, have a look at Wikipedia&apos;s list of
                  highest crowdfunding projects{" "}
                  <Link
                    color={"blue.600"}
                    href=" https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
                  >
                    https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects
                  </Link>
                  , and you&apos;ll notice that blockchain projects absolutely
                  dominate the list.
                </Text>
              </Box>
              <Link href="https://phemex.com/blogs/what-is-a-dex-ido">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Understand the difference between IDO vs. IEO vs. ICO
                </Text>
              </Link>
              <Box>
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={5}
                >
                  Also check these links for latest listings:
                  <br />
                  <br />
                  ICO list at ICO Drops{" "}
                  <Link color={"blue.600"} href=" https://icodrops.com">
                    https://icodrops.com
                  </Link>
                  <br />
                  <br />
                  Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
                  IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs
                  and IDOs{" "}
                  <Link
                    color={"blue.600"}
                    href="https://cryptototem.com/ico-list/"
                  >
                    https://cryptototem.com/ico-list/
                  </Link>
                  <br />
                  <br />
                  ICO List Online{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.icolistingonline.com"
                  >
                    https://www.icolistingonline.com
                  </Link>
                  <br />
                  <br />
                  Binance IEO List{" "}
                  <Link
                    color={"blue.600"}
                    href="https://coincodex.com/ieo-list/binance/"
                  >
                    https://coincodex.com/ieo-list/binance/
                  </Link>
                  <br />
                  <br />
                  IEO List{" "}
                  <Link color={"blue.600"} href="https://icomarks.com/ieo">
                    https://icomarks.com/ieo
                  </Link>
                  <br />
                  <br />
                  PolkastarterList{" "}
                  <Link color={"blue.600"} href="https://polkastarter.com">
                    https://polkastarter.com
                  </Link>
                </Text>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Project Part 1: How to Launch a IEO on Binance Launchpad
              </Heading>
              <Box>
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={-1}
                >
                  Read How to Launch an IEO{" "}
                  <Link
                    color={"blue.600"}
                    href="https://appinventiv.com/blog/how-to-launch-an-ieo/"
                  >
                    https://appinventiv.com/blog/how-to-launch-an-ieo/
                  </Link>
                  <br />
                  <br />
                  Your first task of the project is to make a google slides
                  presentation on how to start a IEO on the Binance Launch Pad{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
                  >
                    https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04
                  </Link>
                  <br />
                  <br />
                  Note: Also document the alternatives to Binance Launchpad.
                </Text>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Project Part 2: How to Launch a IDO on Polkastarter
              </Heading>
              <Box>
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={-1}
                >
                  Review the list of top fundraising platforms{" "}
                  <Link
                    color={"blue.600"}
                    href="https://cryptorank.io/fundraising-platforms"
                  >
                    https://cryptorank.io/fundraising-platforms
                  </Link>
                  <br />
                  <br />
                  Your second task of the project is to make a google slides
                  presentation on how to start a IDO on the Polkastarter{" "}
                  <Link color={"blue.600"} href="https://polkastarter.com/">
                    https://polkastarter.com/
                  </Link>
                </Text>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Project Part 3: Create a Pako Token
              </Heading>
              <Box>
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={-1}
                >
                  By creating a token and related contracts, you&apos;ll also
                  learn how to handle money sent to your contracts, which should
                  come in handy if you want to create some kind of paid
                  decentralized service in the future.
                  <br />
                  <br />
                  Therefore, for the sake of this chapter, let&apos;s imagine
                  that our Pako DApp uses its own coin – the Pako Token. We will
                  create two contracts – one for the token itself and one for
                  the token crowd sale (the ICO).
                  <br />
                  <br />
                  Now Create your own Pako ERC20 Token and deploy it on a
                  testnet. The Token should be to use OpenZeppelin contracts.
                  You will use the Hardhat development environment. Also, write
                  at least twenty automated tests. We will be using Solidity and
                  Typescript for development.
                </Text>
              </Box>
              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Project Part 4: Develop Crowd Sale Contract
              </Heading>
              <Box>
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={-1}
                >
                  This contract will be responsible for allowing users to
                  exchange ETH for our Pako Token. In order to do that we need
                  to set a price for our token (1 ETH = 100 Pako Token)
                  <br />
                  <br />
                  Implement a payable buyToken() function.
                  <br />
                  <br />
                  Emit a BuyTokens event that will log who&apos;s the buyer, the
                  amount of ETH sent and the amount of Token bought.
                  <br />
                  <br />
                  Transfer 75% of the Tokens to the Crowd Sale contract at
                  deployment time. i.e. Right after the contract is deployed, we
                  want the token contract to send 75% of our token supply to it.
                  While 25% remain in our personal &quot;owner&quot; account.
                  <br />
                  <br />
                  Transfer the ownership of the Crowd Sale contract (at deploy
                  time) to our frontend address so that we are able to withdraw
                  the ETH.
                  <br />
                  <br />
                  You can use the openzeppelin crowd sale contracts{" "}
                  <Link
                    color={"blue.600"}
                    href="https://docs.openzeppelin.com/contracts/4.x/crowdsales"
                  >
                    https://docs.openzeppelin.com/contracts/4.x/crowdsales
                  </Link>{" "}
                  however you will have to update the code to the latest
                  solidity version.
                  <br />
                  <br />
                  Also write extensive tests, for example we will simply send a
                  transaction of 1 ETH from a random account to the contract.
                  After the transaction, we should expect the account to have
                  received Pako, while the contract&apos;s balance should have
                  been reduced.
                  <br />
                  <br />
                  Note: Before you get started writing the token contract we
                  suggest you review access control{" "}
                  <Link
                    color={"blue.600"}
                    href="https://docs.openzeppelin.com/contracts/4.x/access-control"
                  >
                    https://docs.openzeppelin.com/contracts/4.x/access-control
                  </Link>
                </Text>
                <Heading
                  as="h2"
                  size={["lg", "xl"]}
                  color={"gray.700"}
                  px={[2, 12]}
                  mt={10}
                >
                  Project Part 5: Trying it with MetaMask
                </Heading>
                <Box>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="gray.800"
                    mt={-1}
                  >
                    While it&apos;s always good to test your code, it&apos;s
                    often more satisfying to see the results of your work
                    wrapped in a nice UI. Let&apos;s see how we can deploy our
                    contracts and get some Pako tokens into our MetaMask wallet!
                    <br />
                    <br />
                    We start by running our deployment scripts for the test
                    network so that the new token contracts are uploaded and
                    deployed.
                    <br />
                    <br />
                    When it&apos;s done, take note of what addresses the
                    contracts were uploaded to and copy it!
                    <br />
                    <br />
                    Now head to MetaMask, and send a transaction of 1 ETH to the
                    crowd sale contract address. If your MetaMask wallet
                    doesn&apos;t have any ethers, remember that you can use any
                    faucet.
                    <br />
                    <br />
                    After the transaction has been confirmed, you might be
                    confused about why you can&apos;t see any tokens in your
                    wallet. It turns out that you need to manually add the token
                    address in MetaMask in order to &quot;register&quot; it –
                    after all, there are so many tokens out there, there&apos;s
                    no way MetaMask could list them all by default!
                    <br />
                    <br />
                    To do this, open the side menu and click on the &quot;Add
                    token&quot; button to get started:
                    <br />
                    <br />
                    Once you&apos;re on the token page, click on &apos;Add
                    custom token&apos; and paste in the token contract&apos;s
                    address in the address field.
                    <br />
                    <br />
                    After confirming that you want to add the token, you should
                    be able to see your Pako balance right next to your ETH
                    balance in the wallet. How cool!
                  </Text>
                </Box>
                <Heading
                  as="h2"
                  size={["lg", "xl"]}
                  color={"gray.700"}
                  px={[2, 12]}
                  mt={10}
                >
                  Project Part 6: Trying it with Multisignature Wallets
                </Heading>
                <Box>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="gray.800"
                    mt={-1}
                  >
                    Read{" "}
                    <Link
                      color={"blue.600"}
                      href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
                    >
                      https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                    </Link>
                    <br />
                    <br />
                    Now use Gnosis Safe{" "}
                    <Link color={"blue.600"} href="https://gnosis-safe.io/">
                      https://gnosis-safe.io/
                    </Link>{" "}
                    with multi-sigs to do what you did in the last part.
                  </Text>
                </Box>
                <Heading
                  as="h2"
                  size={["lg", "xl"]}
                  color={"gray.700"}
                  px={[2, 12]}
                  mt={10}
                >
                  Project Part 7: Sending Tokens using Ethers.js
                </Heading>
                <Box>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="gray.800"
                    mt={-1}
                  >
                    Write a Typescript program to send Pako Token to some
                    friend&apos;s address using Ethers.js.
                    <br />
                    <br />
                    You may follow this tutorial{" "}
                    <Link
                      color={"blue.600"}
                      href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
                    >
                      https://ethereum.org/en/developers/tutorials/send-token-etherjs/
                    </Link>
                  </Text>
                </Box>

                <Heading
                  as="h2"
                  size={["lg", "xl"]}
                  color={"gray.700"}
                  px={[2, 12]}
                  mt={10}
                >
                  Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT
                </Heading>
                <Box>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    fontWeight={"medium"}
                    px={[2, 12]}
                    pt={4}
                    color="gray.800"
                    mt={-1}
                    mb={8}
                  >
                    Read this NFT tutorial series{" "}
                    <Link
                      color={"blue.600"}
                      href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
                    >
                      https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
                    </Link>
                    <br />
                    <br />
                    Create a NFT contract using the OpenZepplen ERC721 NFT
                    Standard{" "}
                    <Link
                      color={"blue.600"}
                      href="https://docs.openzeppelin.com/contracts/4.x/erc721"
                    >
                      https://docs.openzeppelin.com/contracts/4.x/erc721
                    </Link>
                    <br />
                    <br />
                    You may use the Preset ERC721 contract{" "}
                    <Link
                      color={"blue.600"}
                      href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
                    >
                      https://docs.openzeppelin.com/contracts/4.x/erc721#Presets
                    </Link>
                    <br />
                    <br />
                    Deploy your NFT contract on a testnet, mint it, and view it
                    on the MetaMask wallet and list it on OpenSea Marketplace{" "}
                    <Link color={"blue.600"} href="https://opensea.io/">
                      https://opensea.io/
                    </Link>{" "}
                    for sale.
                    <br />
                    <br />
                    Implement a ERC721 Market{" "}
                    <Link
                      color={"blue.600"}
                      href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
                    >
                      https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
                    </Link>
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default MetaverseQ4;
