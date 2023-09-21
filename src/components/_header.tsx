import { Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <HStack
      fontFamily={"NexaBold"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Heading fontSize={"2.5rem"}>Pixicle</Heading>
      <HStack gap={"4rem"} fontSize={"1.5rem"} fontWeight={400}>
        <Text>Home</Text>
        <Text>Marketplace</Text>
        <Text>Trends</Text>
        <Text>FAQ</Text>
      </HStack>
      <Button
        borderRadius={"1rem"}
        background={"#1DB96F"}
        fontSize={"1.5rem"}
        fontWeight={"400"}
        color={"#FFFFFF"}
        display={"flex"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        padding={"1rem"}
        width={"13.75rem"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
        >
          <path
            d="M17.3333 14C17.9111 14 18.3889 13.8111 18.7667 13.4333C19.1444 13.0556 19.3333 12.5778 19.3333 12C19.3333 11.4222 19.1444 10.9444 18.7667 10.5667C18.3889 10.1889 17.9111 10 17.3333 10C16.7556 10 16.2778 10.1889 15.9 10.5667C15.5222 10.9444 15.3333 11.4222 15.3333 12C15.3333 12.5778 15.5222 13.0556 15.9 13.4333C16.2778 13.8111 16.7556 14 17.3333 14ZM2.66667 24C1.93333 24 1.30556 23.7389 0.783333 23.2167C0.261111 22.6944 0 22.0667 0 21.3333V2.66667C0 1.93333 0.261111 1.30556 0.783333 0.783333C1.30556 0.261111 1.93333 0 2.66667 0H21.3333C22.0667 0 22.6944 0.261111 23.2167 0.783333C23.7389 1.30556 24 1.93333 24 2.66667V6H21.3333V2.66667H2.66667V21.3333H21.3333V18H24V21.3333C24 22.0667 23.7389 22.6944 23.2167 23.2167C22.6944 23.7389 22.0667 24 21.3333 24H2.66667ZM13.3333 18.6667C12.6 18.6667 11.9722 18.4056 11.45 17.8833C10.9278 17.3611 10.6667 16.7333 10.6667 16V8C10.6667 7.26667 10.9278 6.63889 11.45 6.11667C11.9722 5.59444 12.6 5.33333 13.3333 5.33333H22.6667C23.4 5.33333 24.0278 5.59444 24.55 6.11667C25.0722 6.63889 25.3333 7.26667 25.3333 8V16C25.3333 16.7333 25.0722 17.3611 24.55 17.8833C24.0278 18.4056 23.4 18.6667 22.6667 18.6667H13.3333ZM22.6667 16V8H13.3333V16H22.6667Z"
            fill="white"
          />
        </svg>{" "}
        <Text fontSize={"1.5rem"} fontWeight={400}>
          Wallet
        </Text>
      </Button>
    </HStack>
  );
}

export default Header;
