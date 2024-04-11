/* eslint-disable @typescript-eslint/no-explicit-any */
import FormLayout from "@/components/layouts/FormLayout";

import TextInputComponent from "@/components/inputs/TextInputComponent";
import TextEditorInput from "@/components/inputs/TextEditorInput";
import { useForm } from "@mantine/form";
import FileUpload from "@/components/inputs/FileUpload";
import useMutate from "@/hooks/useMutate";
import { useState } from "react";
import toast from "react-hot-toast";
import GradeSectionSubject from "@/components/common/GradeSectionSubject";
import AdditionalLessons from "./components/AdditionalLessons";

const Create = () => {
  const [file, setFile] = useState<File | undefined>();
  const [additionalFiles, setAdditionalFiles] = useState<any>([]);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      grade_id: "",
      section_id: "",
      subject_id: "",
    },
    validateInputOnBlur: true,
    validate: {
      title: (value: string) => (value.length > 0 ? null : "Title is required"),
      grade_id: (value: string) =>
        value.length > 0 ? null : "Grade is required",
      section_id: (value: string) =>
        value.length > 0 ? null : "Section is required",
      subject_id: (value: string) =>
        value.length > 0 ? null : "Subject is required",
    },
  });

  const [onSubmit, { isLoading }] = useMutate();

  const onSubmitHandler = (values: any) => {
    if (values.description == "") return toast.error("Description is requried");
    if (!file) return toast.error("File is requried");

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    formData.append("file", file as File);

    if (additionalFiles.length > 0) {
      additionalFiles?.map((additionalFile: any, index: number) => {
        formData.append(`additionals[${index}][type]`, additionalFile.type);
        formData.append(`additionals[${index}][file]`, additionalFile.file);
      });
    }

    onSubmit("/assignments", formData, "POST", true);

    setFile(undefined);
  };

  return (
    <FormLayout
      title="Create Assignment"
      submitLoading={isLoading}
      onSubmit={form.onSubmit((values) => onSubmitHandler(values))}
      linkItems={[
        { title: "Dashboard", link: "/dashboard" },
        { title: "Assignment List", link: "/assignments/list" },
        { title: "New Assignment", link: "" },
      ]}
      header={{
        image:
          "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Lorem espum",
      }}
    >
      <div className="w-full space-y-4">
        <TextInputComponent
          label="Title"
          placeholder="Enter title"
          withAsterisk
          form={form}
          name="title"
        />

        <TextEditorInput
          label="Description"
          value={form.values.description}
          onChange={(val) => form.setFieldValue("description", val)}
        />

        <GradeSectionSubject form={form} />

        <FileUpload type={"all"} setSingleFile={setFile} />

        <AdditionalLessons
          additonalFiles={additionalFiles}
          setAdditionalFiles={setAdditionalFiles}
        />
      </div>
    </FormLayout>
  );
};

export default Create;
