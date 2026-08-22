import type { Stack } from "@/interfaces/stack.types";
import ReactLogo from "@/icons/react-logo.svg";
import NextJsLogo from "@/icons/nextjs-logo.svg";
import AstroLogo from "@/icons/astro-logo.svg";
import NodeLogo from "@/icons/node-logo.svg";
import PostgresLogo from "@/icons/postgresql-logo.svg";
import TailwindLogo from "@/icons/tailwind-logo.svg";
import ShadcnLogo from "@/icons/shadcn-logo.svg";
import BootstrapLogo from "@/icons/bootstrap-logo.svg";
import JavascriptLogo from "@/icons/javascript-logo.svg";
import TypescriptLogo from "@/icons/typescript-logo.svg";
import PhpLogo from "@/icons/php-logo.svg";
import ExpressLogo from "@/icons/express-logo.svg";
import MysqlLogo from "@/icons/mysql-logo.svg";
import PrismaormLogo from "@/icons/prismaorm-logo.svg";
import NestJsLogo from "@/icons/nestjs-logo.svg";
import jQueryLogo from "@/icons/jquery-logo.svg";

export const stack: Stack = {
  frontend: [
    {
      title: "React",
      logo: ReactLogo,
    },
    {
      title: "NextJs",
      logo: NextJsLogo,
    },
    {
      title: "Astro",
      logo: AstroLogo,
    },
    {
      title: "jQuery",
      logo: jQueryLogo,
    }
  ],
  backend: [
    {
      title: "NodeJs",
      logo: NodeLogo,
    },
    {
      title: "Express",
      logo: ExpressLogo,
    },
    {
      title: "NestJs",
      logo: NestJsLogo,
    }
  ],
  database: [
    {
      title: "PostgreSQL",
      logo: PostgresLogo,
    },
    {
      title: "MySQL",
      logo: MysqlLogo,
    },
    {
      title: "PrismaORM",
      logo: PrismaormLogo,
    }
  ],
  styles : [
    {
      title: "TailwindCSS",
      logo: TailwindLogo,
    },
    {
      title: "Bootstrap",
      logo: BootstrapLogo,
    },
    {
      title: "Shadcn/ui",
      logo: ShadcnLogo,
    }
  ],
   languages: [
    {
      title: "JavaScript",
      logo: JavascriptLogo,
    },
    {
      title: "TypeScript",
       logo: TypescriptLogo,
     },
     {
       title: "PHP",
        logo: PhpLogo,
    }
  ]
};
