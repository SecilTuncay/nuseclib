import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLibData } from "../features/libitems/libitemsSlice";
import { fetchAllLibData } from "../features/libitems/libitemsSlice";

function MainItems() {
  const dispatch = useDispatch();
  const allLibData = useSelector(getAllLibData);

  useEffect(() => {
    dispatch(fetchAllLibData());
  }, []);


  return (
    <>
      MainItems
    </>
  )
}

export default MainItems