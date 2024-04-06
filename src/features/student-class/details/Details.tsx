import { IconPencilMinus } from "@tabler/icons-react";

import MyButton from "@/components/buttons/MyButton";
import DetailsLayout from "@/components/layouts/DetailsLayout";
import StudentClassInformation from "./StudentClassInformation";

const Details = () => {
  return (
    <DetailsLayout
      linkItems={[
        { title: "Dashboard", link: "/dashboard" },
        { title: "Zoom Meeting List", link: "/zoom-meetings/list" },
        { title: "Zoom Meeting Details", link: "" },
      ]}
    >
      <div className="w-full flex justify-between sm:items-end items-start sm:flex-row flex-col gap-3 relative">
        <StudentClassInformation />

        <div className="absolute top-0 right-0">
          <MyButton leftIcon={<IconPencilMinus size={16} />}>Edit</MyButton>
        </div>
      </div>
    </DetailsLayout>
  );
};

export default Details;
