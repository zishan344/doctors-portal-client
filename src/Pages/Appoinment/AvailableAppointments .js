import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import BookingModal from "./BookingModal";
import Service from "./Service";
const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatDate = format(date, "PP");
  // const [services, setService] = useState([]);
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatDate], () =>
    fetch(
      `https://afternoon-plateau-95028.herokuapp.com/available?date=${formatDate}`
    ).then((res) => res.json())
  );
  // const {
  //   data: services,
  //   isLoading,
  // } = useQuery("available", formatDate, () => {
  //   fetch(`https://afternoon-plateau-95028.herokuapp.com/available?date=${formatDate}`).then((res) =>
  //     res.json()
  //   );
  // });
  if (isLoading) {
    return <Spinner />;
  }
  // useEffect(() => {
  //   fetch(`https://afternoon-plateau-95028.herokuapp.com/available?date=${formatDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, [formatDate]);
  return (
    <div>
      <h2 className="text-secondary text-center font-bold text-xl">
        {" "}
        Available Appointments on {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services?.map((service) => (
          <Service
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
