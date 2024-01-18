"use client";

import InViewLayout from "@/components/layout/InViewLayout";
import MediaKitHoverLayout from "@/components/layout/MediaKitHoverLayout";
import { useMediaKit } from "@/state/mediaKit";
import { Contact } from "@/types/mediaKit";

const MediaKitContact = () => {
  const { getElement } = useMediaKit()();

  const contact = getElement("contact") as Contact;

  return (
    <section id="contact" className="mb-[60px] last-of-type:mb-0">
      <InViewLayout id="contact">
        <MediaKitHoverLayout>
          <div className="mb-5 border-t-1 border-foreground" />
          <h3 className="secondary-font colour-animation col-span-full mb-2 text-[34px] leading-tight text-foreground lg:col-span-6 lg:mb-2">
            Contact
          </h3>
          {contact?.value?.payload?.agencyEmail && (
            <div className="flex">
              <p className="colour-animation whitespace-pre text-[20px] text-muted lg:text-[34px]">
                Agent{" "}
              </p>
              <a
                className="colour-animation text-[20px] text-secondary underline duration-300 hover:text-foreground lg:text-[34px]"
                href={`mailto: ${contact.value.payload.agencyEmail}`}
              >
                {contact.value.payload.agencyEmail}
              </a>
            </div>
          )}
          {contact?.value?.payload?.personalEmail && (
            <div className="flex">
              <p className="colour-animation whitespace-pre text-[20px] text-muted lg:text-[34px]">
                Personal{" "}
              </p>
              <a
                className="colour-animation text-[20px] text-secondary underline duration-300 hover:text-foreground lg:text-[34px]"
                href={`mailto: ${contact.value.payload.personalEmail}`}
              >
                {contact.value.payload.personalEmail}
              </a>
            </div>
          )}
          {contact?.value?.payload?.phone && (
            <div className="flex">
              <p className="colour-animation whitespace-pre text-[20px] text-muted lg:text-[34px]">
                Phone{" "}
              </p>
              <a
                className="colour-animation text-[20px] text-secondary underline duration-300 hover:text-foreground lg:text-[34px]"
                href={`tel: ${contact.value.payload.phone}`}
              >
                {contact.value.payload.phone}
              </a>
            </div>
          )}
        </MediaKitHoverLayout>
      </InViewLayout>
    </section>
  );
};

export default MediaKitContact;
