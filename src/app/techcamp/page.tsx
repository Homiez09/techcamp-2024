import MainLayout from "@/components/Layouts/MainLayout";
import TechCamp1 from "@/components/TechCamp/TechCamp1";

export default function Page() {
    return (
        <MainLayout>
            <div className="min-h-screen bg-secondary-texture bg-center pt-20">
                {/* add component path: @/components/TechCamp/ */}
                <TechCamp1 />
            </div>
        </MainLayout>
    )
}