/* eslint-disable @typescript-eslint/no-explicit-any */
import MyButton from "@/components/buttons/MyButton";
import VideoPlayer from "@/components/common/VideoPlayer";
import Heading from "@/components/typography/Heading";
import useMutate from "@/hooks/useMutate";
import alertActions from "@/utilities/alertActions";
import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

interface PropsType {
  data: any;
  onClose: () => void;
}

const LearnCourseContentCard: React.FC<PropsType> = ({ data, onClose }) => {
  const [onSubmit] = useMutate({
    navigateBack: false,
    callback: () => onClose(),
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="max-h-[300px]">
        {(data?.content_type == "video" || data?.content_type == "youtube") && (
          <VideoPlayer
            url={data?.content}
            type={data?.content_type}
            controls={false}
          />
        )}

        {data?.content_type == "image" && (
          <div className="h-[300px] flex justify-center items-center">
            <img
              src={data?.content}
              alt={data?.content_type}
              className="h-[300px] object-cover"
            />
          </div>
        )}

        {data?.content_type == "text" && (
          <div
            className="border-b pb-2 text-desc"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        )}
      </div>

      {(data?.content_type == "video" || data?.content_type == "youtube") && (
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="Warnning!"
          color="yellow"
          className="my-4"
        >
          You cann't skip the video
        </Alert>
      )}

      <div className=" space-y-2 px-[6px] mt-4">
        <Heading tag="h6">{data?.name}</Heading>
        <p className="text-sm text-gray-500">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </p>

        <p className="text-sm text-gray-500">Created At - {data?.created_at}</p>
        <p className="text-sm text-gray-500">
          Status - {data?.is_complete ? "Completed" : " Not Complete"}
        </p>

        <div className="flex justify-end items-center gap-2 mt-4">
          <MyButton
            onClick={() =>
              alertActions(
                () => onSubmit(`/course-contents/${data?.id}/complete`),
                "Are you sure ?"
              )
            }
            disabled={data?.is_complete}
          >
            Make As Complete
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default LearnCourseContentCard;
