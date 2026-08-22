import joinUs from "@/assets/images/careers/join-us.webp";
import { Button, StoryPanel } from "@/components";

export default function Intro() {
  return (
    <section className="relative isolate overflow-clip pt-18 md:pt-36 lg:pt-30">
      <div className="v-page">
        <StoryPanel
          image={joinUs}
          title="Care to join our mission?"
          body="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          imageOn="right"
          arrowAt="-bottom-1.5 -left-1.5 md:-left-33"
          reveal={false}
        >
          <Button>Say Hello</Button>
        </StoryPanel>
      </div>
    </section>
  );
}
