// app/settings/page.tsx
import { User, Lock, Bell, Palette, Globe } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen mt-20 px-4 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block border-r border-muted p-6">
        <h2 className="text-lg font-semibold mb-6 text-primary">Settings</h2>
        <ul className="space-y-4 text-sm text-muted-foreground">
          <li className="hover:text-primary cursor-pointer flex items-center gap-2">
            <User className="w-4 h-4" />
            Account
          </li>
          <li className="hover:text-primary cursor-pointer flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Security
          </li>
          <li className="hover:text-primary cursor-pointer flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </li>
          <li className="hover:text-primary cursor-pointer flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Appearance
          </li>
          <li className="hover:text-primary cursor-pointer flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Language
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Account Settings */}
        <Section
          icon={<User className="text-primary" />}
          title="Account"
          description="Update your profile information, email, and username."
          buttonText="Edit Profile"
        />

        {/* Security Settings */}
        <Section
          icon={<Lock className="text-primary" />}
          title="Security"
          description="Change your password or enable two-factor authentication."
          buttonText="Manage Security"
        />

        {/* Notification Settings */}
        <Section
          icon={<Bell className="text-primary" />}
          title="Notifications"
          description="Choose how and when you receive notifications."
          buttonText="Notification Settings"
        />

        {/* Appearance */}
        <Section
          icon={<Palette className="text-primary" />}
          title="Appearance"
          description="Switch between light, dark or system themes."
          buttonText="Change Theme"
        />

        {/* Language */}
        <Section
          icon={<Globe className="text-primary" />}
          title="Language"
          description="Select your preferred language for the platform."
          buttonText="Change Language"
        />
      </main>
    </div>
  );
};

const Section = ({
  icon,
  title,
  description,
  buttonText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}) => (
  <div className="bg-white dark:bg-muted p-6 rounded-2xl shadow-md">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-lg font-medium">{title}</h2>
    </div>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <button className="text-sm text-blue-600 hover:underline">
      {buttonText}
    </button>
  </div>
);

export default SettingsPage;
