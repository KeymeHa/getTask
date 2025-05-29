declare module 'swagger-jsdoc' {
  import { OpenAPIV3 } from 'openapi-types';
  function swaggerJsdoc(options: any): OpenAPIV3.Document;
  export = swaggerJsdoc;
}
