import React, { useState } from "react";

import JobForm from "../Form/JobForm";
import Demo from "../Form/Demo";

const AddJob: React.FC = () => {
  const [addModal, setAddModal] = useState<boolean>(false);

  return (
    <>
      <JobForm />
      {/* <Demo /> */}
    </>
  );
};

export default AddJob;
