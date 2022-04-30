import nacl from "tweetnacl";
import binary from "@olliemurray/cryptosimmod/lib/binary";
import GeoCoordinates from "@olliemurray/cryptosimmod/lib/geoCoordinates";
import GroundStation from "@olliemurray/cryptosimmod/lib/groundStation";
import GroundStationNetwork from "@olliemurray/cryptosimmod/lib/groundStationNetwork";
import LookAngle from "@olliemurray/cryptosimmod/lib/lookAngle";
import Orbit from "@olliemurray/cryptosimmod/lib/orbit";
import Satellite from "@olliemurray/cryptosimmod/lib/satellite";
import Universe from "@olliemurray/cryptosimmod/lib/universe";
import MainClient from "@olliemurray/cryptosimmod/lib/clients/main";
import MainService from "@olliemurray/cryptosimmod/lib/services/main";
import Service from "@olliemurray/cryptosimmod/lib/services/service";
import SimulatedClock from "@olliemurray/cryptosimmod/lib/clocks/simulatedClock";

const payload = {
  binary: binary,
  nacl: nacl,
  GeoCoordinates: GeoCoordinates,
  GroundStation: GroundStation,
  GroundStationNetwork: GroundStationNetwork,
  LookAngle: LookAngle,
  Orbit: Orbit,
  Satellite: Satellite,
  Universe: Universe,
  MainClient: MainClient,
  MainService: MainService,
  Service: Service,
  SimulatedClock: SimulatedClock,
};

export default payload;
