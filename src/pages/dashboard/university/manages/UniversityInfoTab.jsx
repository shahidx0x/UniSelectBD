import "react-image-picker-editor/dist/index.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UniversityCoursesInformation from "./UniversityCoursesInformation";
import UniversityInfrastructureInformation from "./UniversityInfrastructureInformation";
import UniversityFeeInformaton from "./UniversityFeeInformaton";
import UniversityInformationManagment from "./UniversityInformationManagment";

const UniversityInfoTab = () => {
  return (
    <div>
      <div>
        <section className="dashboard-section">
          <form
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <Tabs defaultValue="ui" className="">
              <TabsList>
                <TabsTrigger value="ui">University Information</TabsTrigger>
                <TabsTrigger value="uci">
                  University Courses Information
                </TabsTrigger>
                <TabsTrigger value="uii">
                  University Infrastructure Information
                </TabsTrigger>
                <TabsTrigger value="ufi">
                  University Fee Information
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ui">
                <UniversityInformationManagment />
              </TabsContent>
              <TabsContent value="uci">
                <UniversityCoursesInformation />
              </TabsContent>
              <TabsContent value="uii">
                <UniversityInfrastructureInformation />
              </TabsContent>
              <TabsContent value="ufi">
                <UniversityFeeInformaton />
              </TabsContent>
            </Tabs>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UniversityInfoTab;
