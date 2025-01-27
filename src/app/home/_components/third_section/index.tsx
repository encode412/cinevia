import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CustomTypography } from "@/app/components";

const ThirdSection = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <CustomTypography
        variant="h3"
        fontFamily="var(--font-netflix-sans-medium)"
        sx={{
          textAlign: "start",
          paddingTop: "10px",
          paddingBottom: "15px",
        }}
      >
        Frequently Asked Questions
      </CustomTypography>
      <Accordion
        sx={{
          backgroundColor: "#333",
          color: "#ccc",
          borderColor: "#444",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#fff", fontSize: '40px' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#333",
            minHeight: "20px",
            padding: "8px",
          }}
        >
          <CustomTypography sx={{ color: "#fff" }} variant="body1">
            What is Cinevia?
          </CustomTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#333",
            padding: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#333",
          color: "#ccc",
          borderColor: "#444",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#fff", fontSize: '40px' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#333",
            minHeight: "20px",
            padding: "8px",
          }}
        >
          <CustomTypography sx={{ color: "#fff" }} variant="body1">
            How much does Cinevia cost?
          </CustomTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#333",
            padding: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "#333",
          color: "#ccc",
          borderColor: "#444",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#fff", fontSize: '40px' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#333",
            minHeight: "20px",
            padding: "8px",
          }}
        >
          <CustomTypography sx={{ color: "#fff" }} variant="body1">
            Where do I watch?
          </CustomTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#333",
            padding: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "#333",
          color: "#ccc",
          borderColor: "#444",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#fff", fontSize: '40px' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#333",
            minHeight: "20px",
            padding: "8px",
          }}
        >
          <CustomTypography sx={{ color: "#fff" }} variant="body1">
           How do I cancel?
          </CustomTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#333",
            padding: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "#333",
          color: "#ccc",
          borderColor: "#444",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#fff", fontSize: '40px' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#333",
            minHeight: "20px",
            padding: "8px",
          }}
        >
          <CustomTypography sx={{ color: "#fff" }} variant="body1">
            What can I watch on Cinevia?
          </CustomTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#333",
            padding: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "#333",
          color: "#ccc",
          borderColor: "#444",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#fff", fontSize: '40px' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "#333",
            minHeight: "20px",
            padding: "8px",
          }}
        >
          <CustomTypography sx={{ color: "#fff" }} variant="body1">
            Is Cinevia good for kids?
          </CustomTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#333",
            padding: "8px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "24px" }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. <br /> <br /> You can watch
            as much as you want, whenever you want without a single commercial –
            all for one low monthly price. There's always something new to
            discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ThirdSection;
