import React from "react";
import PhoneRepairItem from "./PhoneRepairItem";
import { useSelector } from 'react-redux';

export default function PhoneRepairList() {
  // store
  const { filterString, repairs } = useSelector(state => state.repair);

  const regexpString = (filterString) ? filterString : '.';
  let regexp = new RegExp(`${regexpString}`);

  // const viewRepairs = repairs.filter((item) => regexp.test(item.name));
  const viewRepairs = repairs.filter((item) => regexp.test(item.name));

  return (
    <div>
      <ul>
        { viewRepairs.map((i) => <PhoneRepairItem key={i.id} item={i} />) }
      </ul>
    </div>
  );
}
