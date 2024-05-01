import { Typography, Container, Grid, Box } from "@mui/material";
import React from "react";
import CalendarIcon from "@mui/icons-material/CalendarToday"; // Import an icon from Material-UI icons

const About = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4} justifyContent="center">
        {/* Header section with icon/image */}
        <Grid item xs={12} textAlign="center">
          <Box mt={6} textAlign="center">
            <CalendarIcon style={{ fontSize: 80, marginTop: "20px" }} />
          </Box>
          <Box mt={4} textAlign="center">
            <Typography variant="h4" gutterBottom color="primary">
              אודות קלנדר
            </Typography>
          </Box>
        </Grid>
        {/* Main content area */}
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            אתר לעיצוב לוח שנה אישי-משפחתי. הלוח מעוצב אוטומטית על ידי האתר
            על פי התמונות והתאריכים שהמשתמש מכניס.
          </Typography>
          <Typography variant="h6" gutterBottom>
            מטרות המערכת
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>
                המטרה העיקרית של המערכת הינה יצירת לוח שנה משפחתי הכולל תאריכים
                משפחתיים כגון: ימי הולדת של בני המשפחה, ימי נישואין, ועוד...
              </li>
              <li>
                לאפשר למשפחות לעצב לוח שנה משלהם בקלות מירבית ללא צורך בידע בעיצוב
                כלל
              </li>
              <li>
                להקל על המשפחה בזכירת האירועים הרבים המאפיינים משפחות גדולות
              </li>
              <li>
                ליצור גיבוש בין בני המשפחה ע''י לוח משפחתי הנגיש לכולם ומתעדכן
                בעת הוספת אירוע משמעותי חדש
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
