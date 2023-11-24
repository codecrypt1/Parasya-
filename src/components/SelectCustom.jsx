"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectCustom = ({ options }) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Select a College" className="">
        {options.map((e) => (
          <SelectItem key={e.value} value={e.value}>
            {e.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCustom;
