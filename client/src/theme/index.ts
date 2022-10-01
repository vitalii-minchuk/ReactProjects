import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#7E7E7E",
  transform: "translateY(-21px)",
};

export default extendTheme({
  fonts: {
    body: ["'Nunito', sans-serif", "'Caveat'"],
  },
  styles: {
    global: () => ({
      body: {
        bg: "#E5E5E5",
        fontFamily: "'Nunito', sans-serif",
      },
    }),
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input, input:hover, input:focus-visible": {
              border: "1px solid #D0CFCF",
              boxShadow: "none",
              borderRadius: "4px",
              margin: "0 auto",
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: "6px",
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "#E5E5E5",
              pointerEvents: "none",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              color: "#7E7E7E",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
