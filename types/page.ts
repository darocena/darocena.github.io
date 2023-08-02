import { HeaderProps } from "@/components/Header/Header";
import { MetaProps } from "@/components/Meta/Meta";

export interface PageProps {
    error?: string
    meta: MetaProps;
    header?: HeaderProps;
}