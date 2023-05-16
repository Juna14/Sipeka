import {
  FormEditKepegawaian,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const EditKepegawaian = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Kepegawaian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Ajuan Perubahan Data Kepegawaian
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormEditKepegawaian />
          </div>
        </div>
        <TabRiwayatAjuanPerubahanData
          title={"Riwayat Ajuan Perubahan Data Kepegawaian"}
        />
      </div>
    </MainLayout>
  );
};

export default EditKepegawaian;
