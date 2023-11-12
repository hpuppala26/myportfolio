import React from "react";
import JavascriptLogo from "@images/images/javascript-logo.svg";
import PythonLogo from "@images/images/python-logo.svg";
import TypescriptLogo from "@images/images/typescript-logo.svg";
import NodeJSLogo from "@images/images/nodejs-logo.svg";
import MongoDBLogo from "@images/images/mongo-logo.svg";
import PostgresSQLLogo from "@images/images/postgresql-logo.svg";
import GitLogo from "@images/images/git-logo.svg";
import DockerLogo from "@images/images/docker-logo.svg";
import HTMLLogo from "@images/images/html-5-logo.svg";
import CSSLogo from "@images/images/css-3-logo.svg";
import ReactLogo from "@images/images/react-logo.svg";
import NextJSLogo from "@images/images/nextjs-logo.svg";
import ReduxLogo from "@images/images/redux-logo.svg";
import GoLangLogo from "@images/images/golang-logo.svg";
import JavaLogo from "@images/images/java-logo.svg";
import RedisLogo from "@images/images/redis-logo.svg";
import KafkaLogo from "@images/images/kafka-logo.svg";
import MSSQLLogo from "@images/images/mssql-logo.svg";
import AWSLogo from "@images/images/aws-logo.svg";
import GrafanaLogo from "@images/images/grafana-logo.svg";
import SparkLogo from "@images/images/spark-logo.svg";
import AirflowLogo from "@images/images/airflow-logo.svg";
import HadoopLogo from "@images/images/hadoop-logo.svg";
import NumpyLogo from "@images/images/numpy-logo.svg";
import PandasLogo from "@images/images/pandas-logo.svg";
import SciKitLearnLogo from "@images/images/scikitlearn-logo.svg";
import TensorFlowLogo from "@images/images/tensorflow.svg";
import DjangoLogo from "@images/images/django-icon.svg";
import NewRelicLogo from "@images/images/new_relic_logo_horizontal.svg";

// import { SKILLS } from "@/constants/menu";
import AppSection from "../AppSection";
import SkillsSubSection from "./SkillsSubSection";

const programmingSkills = [
  {
    id: "golang",
    logo: GoLangLogo,
    name: "Go",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "python",
    logo: PythonLogo,
    name: "Python",
    url: "https://www.python.org/doc/",
  },
  {
    id: "javascript",
    logo: JavascriptLogo,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "java",
    logo: JavaLogo,
    name: "Java",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  }
];

const frontendSkills = [
  {
    id: "html",
    logo: HTMLLogo,
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "css",
    logo: CSSLogo,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "reactJS",
    logo: ReactLogo,
    name: "ReactJS",
    url: "https://reactjs.org/",
  },
  { id: "nextjs",
    logo: NextJSLogo,
    name: "NextJS",
    url: "https://nextjs.org/"
 }
];

const backendSkills = [
  {
    id: "node",
    logo: NodeJSLogo,
    name: "NodeJS",
    url: "https://nodejs.org/en/docs/",
  },
  {
    id: "django",
    logo: DjangoLogo,
    name: "Django",
    url: "https://www.djangoproject.com/",
  },
  {
    id: "kafka",
    logo: KafkaLogo,
    name: "Apache Kafka",
    url: "https://expressjs.com/en/api.html",
  },
  {
    id: "redis",
    logo: RedisLogo,
    name: "Redis Stack",
    url: "https://expressjs.com/en/api.html",
  }
];

const databaseSkills = [
  {
    id: "mongoDB",
    logo: MongoDBLogo,
    name: "MongoDB",
    url: "https://docs.mongodb.com/",
  },
  {
    id: "postgresSQL",
    logo: PostgresSQLLogo,
    name: "PostgresSQL",
    url: "https://www.postgresql.org/docs/",
  },
  {
    id: "MySQL",
    logo: MSSQLLogo,
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
];

const dataEngineeringSkills = [
  {
    id: "spark",
    logo: SparkLogo,
    name: "Apache Spark",
    url: "https://docs.docker.com/",
  },
  {
    id: "airflow",
    logo: AirflowLogo,
    name: "Airflow",
    url: "https://docs.docker.com/",
  },
  {
    id: "Hadoop",
    logo: HadoopLogo,
    name: "Hadoop",
    url: "https://docs.docker.com/",
  }
];

const machineLearningSkills = [
  {
    id: "numpy",
    logo: NumpyLogo,
    name: "Numpy",
    url: "https://docs.docker.com/",
  },
  {
    id: "pandas",
    logo: PandasLogo,
    name: "Pandas",
    url: "https://docs.docker.com/",
  },
  {
    id: "scikitlearn",
    logo: SciKitLearnLogo,
    name: "SciKit-Learn",
    url: "https://docs.docker.com/",
  },
  {
    id: "tensorflow",
    logo: TensorFlowLogo,
    name: "TensorFlow",
    url: "https://www.tensorflow.org/",
  }
];

const monitoringSkills = [
  {
    id: "grafana",
    logo: GrafanaLogo,
    name: "Grafana",
    url: "https://docs.docker.com/",
  },
  {
    id: "newrelic",
    logo: NewRelicLogo,
    name: "NewRelic",
    url: "https://newrelic.com/",
  }
];

const cloudSkills = [
  { id: "git", logo: GitLogo, name: "Git", url: "https://git-scm.com/doc" },
  {
    id: "docker",
    logo: DockerLogo,
    name: "Docker",
    url: "https://docs.docker.com/",
  },
  {
    id: "aws",
    logo: AWSLogo,
    name: "AWS",
    url: "https://www.aws.com/",
  }
];

function SkillsSection() {
  return (
    <AppSection headerTxt={"skills"}>
      <div className="flex lg:flex-row max-lg:flex-col-reverse flex-col sm:gap-12 gap-9 section-content-padding">
        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Programming Languages"} skills={programmingSkills} />
          <SkillsSubSection headerTxt={"Cloud"} skills={cloudSkills} />
          <SkillsSubSection headerTxt={"Data Engineering"} skills={dataEngineeringSkills} />
          <SkillsSubSection headerTxt={"Monitoring"} skills={monitoringSkills} />
        </div>

        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Backend"} skills={backendSkills} />
          <SkillsSubSection headerTxt={"Databases"} skills={databaseSkills} />
          <SkillsSubSection headerTxt={"Frontend"} skills={frontendSkills} />
          <SkillsSubSection headerTxt={"Machine Learning"} skills={machineLearningSkills} />
        </div>
      </div>
    </AppSection>
  );
}

export default SkillsSection;
