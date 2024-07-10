import QuickStartCard, { IQuickStartCard } from "./quick-start-card";
import styles from "../styles/quick.module.css";

const CLUSTER_TYPE_LIST = [
  {
    path: "/spheron-protocol/provider-onboarding/setup-ansible",
    emoji: "🅰️",
    title: "Setup Ansible",
    body: "Deploying a provider using Ansible.",
  },
  {
    path: "/spheron-protocol/provider-onboarding/setup-provider",
    emoji: "🌐",
    title: "Setup Provider",
    body: "Set up a Spheron provider.",
  },
  {
    path: "/spheron-protocol/provider-onboarding/spheron-add-node",
    emoji: "🚧",
    title: "Add Nodes",
    body: "Adding Nodes to a Spheron Cluster",
  },
];

const ProviderOnboarding = () => {
  return (
    <main>
      <section className={styles.section}>
        {CLUSTER_TYPE_LIST.map((item: IQuickStartCard, index) => (
          <QuickStartCard
            key={index}
            path={item.path}
            emoji={item.emoji}
            title={item.title}
            body={item.body}
          />
        ))}
      </section>
    </main>
  );
};

export default ProviderOnboarding;
