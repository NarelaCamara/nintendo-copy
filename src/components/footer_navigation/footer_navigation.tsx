import React from "react";

const FooterNavigation = () => {
  const menuItems = [
    {
      text: "About Nintendo",
      value: ["Careers", "Corporate Social Responsibility"],
    },
    {
      text: "Shop",
      value: [
        "Games",
        "Hardware",
        "Merchandise",
        "Sales & deals",
        "Exclusives",
        "Online service",
        "Nintendo Retail Locations",
      ],
    },
    {
      text: "Orders",
      value: ["Order details", "Shipping info", "Returns & exchanges", "FAQ"],
    },
    {
      text: "Support",
      value: [
        "Nintendo Switch",
        "Nintendo Account",
        "Other systems",
        "Repairs",
        "Nintendo product recycling",
        "Warranty",
        "Licensed product information",
      ],
    },
    { text: "Parents", value: ["Info for parents", "Parental controls"] },
    {
      text: "Privacy",
      value: ["Privacy policy", "Cookies and interest-based ads"],
    },
    {
      text: "Community",
      value: ["Community guidelines", "Online safety principles"],
    },
    {
      text: "Documents & policies",
      value: [
        "Health & safety precautions",
        "Wireless regulatory info",
        "Supply chain transparency",
      ],
    },
  ];

  return (
    <div className="pt-4">
      {
        <div key={menuItems[0].text}>
          <h4 className="bg-red-600">{menuItems[0].text}</h4>

          <div className="flex flex-col flex-nowrap">
            {menuItems[0].value.map((e_) => (
              <p key={e_}>{e_}</p>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default FooterNavigation;
