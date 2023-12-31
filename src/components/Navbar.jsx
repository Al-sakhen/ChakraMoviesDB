"use client";

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    AddIcon,
    MoonIcon,
    SunIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const Links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
];

// const NavLink = (props) => {
//     const { children } = props;
//     return (
//         <Box
//             as="a"
//             px={2}
//             py={1}
//             rounded={"md"}
//             _hover={{
//                 textDecoration: "none",
//                 bg: useColorModeValue("gray.200", "gray.700"),
//             }}
//             href={"#"}
//         >
//             {children}
//         </Box>
//     );
// };

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box as={Link} to={"/"}>A.ALsakhen</Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {Links.map((link) => (
                                <Link key={link.name} to={link.to}>
                                    {link.name}
                                </Link>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={3}>
                            <Button onClick={toggleColorMode} size={"sm"}>
                                {colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={
                                            "https://avatars.dicebear.com/api/male/username.svg"
                                        }
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={
                                                "https://avatars.dicebear.com/api/male/username.svg"
                                            }
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map((link) => (
                                <Link key={link.name} to={link.to}>
                                    {link.name}
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
