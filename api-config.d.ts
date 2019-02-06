import { SzRestConfigurationParameters } from "@senzing/sdk-components-ng";

declare module "api-config.json"
{ 
    const value: any;
    export default value;
}

declare module "*.json"
{ const value: any;
  export default value;
}

declare module "json!*"
{ const value: any;
  export default value;
}