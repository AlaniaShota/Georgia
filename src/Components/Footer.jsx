export const Footer = () => {
  const footerText = [
    "Privacy Policy",
    " Cookie Policy",
    " Terms of Use",
    "Text to Speech",
  ];

  return (
    <div className="flex justify-between border-t mt-20 px-16 py-3">
      <ul className="flex flex-row gap-4">
        {footerText.map((item, index) => (
          <li key={index} className="text-lg font-light">
            {item}
          </li>
        ))}
      </ul>
      <span className="text-xl">GEORGIA</span>
    </div>
  );
};
