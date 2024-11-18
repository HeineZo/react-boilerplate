// Define the RouteObject type explicitly
interface RouteObject {
  path?: string;
  element?: React.ReactNode;
  children?: RouteObject[];
}

// Étendre le type RouteObject pour inclure la propriété "label"
export interface CustomRouteObject extends RouteObject {
  label?: string; // La propriété "label" est optionnelle
}