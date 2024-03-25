import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import {decrypt} from "next/dist/server/app-render/action-encryption-utils";


export default function Page() {
  const accessDenied = true;
  if (accessDenied) {
    redirect('/login')
  }
}
