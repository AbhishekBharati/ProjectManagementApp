"use client"
import React, { useState, useEffect } from 'react';
import ProjectHeader from '../ProjectHeader';
import BoardView from '../BoardView';
import List from '../ListView/index'
import Timeline from '../TimelineView';

type Props =
  {
    params: { id: string }
  }

const Project = ({ params }: Props) => {
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const getId = async () => {
      const param = await params;
      setId(param.id);
    }
    getId();
  }, [params]);

  return (
    <div>
      {/* Modal new Tasks */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {/* { activeTab === "Board" && ( */}
      {/*   <Board /> */}
      {/* )} */}
    </div>
  )
}

type TabButtonProps = {
  name: string;
  icon: React.ReactNode;
  setActiveTab: (tabName: string) => void;
  activeTab: string;
}

export const TabButton = ({ name, icon, setActiveTab, activeTab }: TabButtonProps) => {
  const isActive = activeTab === name;

  return (
    <button className={`relative flex items-center gap-2 px-1 py-2 text-gray500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 
    ${isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""
      }`} onClick={() => setActiveTab(name)}>
      {icon}
      {name}
    </button>
  )
}

export default Project
