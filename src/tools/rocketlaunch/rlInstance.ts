import { RocketLaunchSdk,ChainId } from "@defikit/rocketlaunch_sdk";

const createRocketLaunchInstance = (() => {
  let instance: RocketLaunchSdk | null = null;

  return (privateKey?: string) => {
    if (!instance) {
      if (!privateKey) throw new Error("PRIVATE_KEY is required to initialize RocketLaunchSdk");
      instance = new RocketLaunchSdk(privateKey,ChainId.BARTIO);
    }
    return instance;
  };
})();

export const getRocketLaunchInstance = () => createRocketLaunchInstance(process.env.PRIVATE_KEY);
