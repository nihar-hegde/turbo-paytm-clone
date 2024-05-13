import React from "react";
import { auth } from "../../../auth/auth";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-center p-24">
      <div>{JSON.stringify(session)}</div>
    </div>
  );
};

export default DashboardPage;
