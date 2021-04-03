import React from "react";
import { gql, useQuery } from "@apollo/client";
import { LaunchItem } from "./LaunchItem";
import { MissionKey } from "./MissionKey";
import { Loading } from "./Loading";
const LAUNCH_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export const Launches = () => {
  const { loading, data } = useQuery(LAUNCH_QUERY);

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      {loading && <Loading />}
      <MissionKey />
      {data &&
        data.launches.map((launch, index) => (
          <LaunchItem key={index} launch={launch}></LaunchItem>
        ))}
    </div>
  );
};
