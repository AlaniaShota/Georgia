import { ErrorMessage, Field } from "formik";
import { useGuideStore, useLocationStore } from "../../../../Store/store";
import { useEffect } from "react";

export const SelectGuide = ({ values }) => {
  const { guides = [] } = useGuideStore((state) => state.guides);
  const fetchGuide = useGuideStore((state) => state.fetchGuide);
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);

  useEffect(() => {
    fetchGuide();
    fetchLocations();
  }, [fetchGuide, fetchLocations]);

  const choiceGuide = guides.filter((item) => item.status || null);

  return (
    <div className="mt-7 w-2/3">
      <label htmlFor="selectedGuide" />
      <Field
        as="select"
        name="selectedGuide"
        className="border rounded-md py-2 px-3 w-full"
      >
        <option value="" disabled>
          Select a Guide
        </option>
        {choiceGuide.map((guide) => (
          <option key={guide.id} value={guide.name}>
            {guide.name}
          </option>
        ))}
      </Field>
      <ErrorMessage name="guideRecommendation">
        {(msg) => (
          <div className="px-2 text-red-700 font-medium mt-1">{msg}</div>
        )}
      </ErrorMessage>

      <div className="flex items-center mt-3">
        <span className="mr-2">Recommendations</span>
        <label>
          <Field type="radio" name="guideRecommendation" value="recommended" />
          Yes
        </label>
        <label className="ml-4">
          <Field
            type="radio"
            name="guideRecommendation"
            value="notRecommended"
          />
          No
        </label>
      </div>

      {values.guideRecommendation === "recommended" && (
        <div className="flex flex-wrap">
          <Field
            as="select"
            name="selectedLocation"
            className="border rounded-md py-2 px-3 mt-2 w-full"
          >
            <option value="" disabled>
              Select Your Desired Location
            </option>
            {choiceGuide.map((guide) => {
              if (guide.name === values.selectedGuide) {
                return (
                  <optgroup key={guide.id} label={"Recommendation"}>
                    {guide.recommended.map((place) => (
                      <option key={place.id} value={place.name}>
                        {place.name}
                      </option>
                    ))}
                  </optgroup>
                );
              }
              return null;
            })}
          </Field>
        </div>
      )}
      {values.guideRecommendation === "notRecommended" && (
        <div className="flex flex-wrap">
          <Field
            as="select"
            name="selectedLocation"
            className="border rounded-md py-2 px-3 mt-2 w-full"
          >
            <option value="" disabled>
              Select Your Desired Location
            </option>
            {locations.map((guide) => (
              <option key={guide.id} value={guide.name}>
                {guide.title}
              </option>
            ))}
          </Field>
        </div>
      )}
    </div>
  );
};
