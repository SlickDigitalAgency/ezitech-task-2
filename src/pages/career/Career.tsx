import Careers from "@/components/career/Careers"
import JoinTeam from "@/components/team/JoinTeam"
import Testimonial from "@/components/testimonial/Testimonial"
import { openPositions } from "@/constants/team/JoinTeamData"



const Career = () => {
  return (
    <div>
            <Careers />
        {/* Testimonial Section */}
      <Testimonial/>
      <JoinTeam
        title="Spydea Open Positions"
        description="Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum"
        positions={openPositions}
      />
    </div>
  )
}

export default Career
