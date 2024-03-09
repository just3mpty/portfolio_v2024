import React from "react";
import data from "../../../public/data.json";
import styles from "./selectedProject.module.scss";

const page = ({ params }: { params: { projectId: string } }) => {
    const { projectId } = params;
    const selectedProject = data.find(
        (project) => project._id.toString() === projectId
    );

    return (
        <section className={styles.container}>
            <h1>{selectedProject?.title}</h1>
        </section>
    );
};

export default page;
