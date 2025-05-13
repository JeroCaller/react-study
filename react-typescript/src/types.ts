import { JSX } from "react";

export interface UriInfo {
  /** 화면에 보일 요소명 */
  title: string;
  
  /** 라우팅 URI. 예) "/users" */
  uriPath: string;

  /** uri와 매핑되어 렌더링될 컴포넌트 */
  element: JSX.Element | null;
}

export interface UriInfoArrayProps {
  uriInfo: UriInfo[];
}

/** JSON의 직렬화된 문자열임을 강조하기 위함. */
export type JsonString = string;
