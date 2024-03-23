import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { twMerge } from "tailwind-merge";
import { Drawer } from "@mantine/core";

interface PropsType {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: PropsType) => {
  const [opened, { toggle, close }] = useDisclosure(true);
  const matches = useMediaQuery("(max-width: 796px)");

  return (
    <div className="flex items-start h-screen overflow-hidden">
      {matches && (
        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          classNames={{
            content: "max-w-[230px] ",
            body: "p-0 ",
          }}
        >
          <SideBar opened={opened} />
        </Drawer>
      )}

      {!matches && <SideBar opened={opened} />}

      <div
        className={twMerge(
          "h-full transition-all duration-300 ease-in-out",
          opened && !matches ? "w-[calc(100%-230px)]" : "w-full"
        )}
      >
        <NavBar toggle={toggle} />

        <div className="h-[calc(100%-70px)] w-full overflow-y-auto bg-[#f5f5f5]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
