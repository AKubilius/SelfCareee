import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
  } from "@mui/material";
  
  interface IRecepy {
    name: string;
    adress: string;
    workingHours: string;
    image:string;
    id:number;
  }
  
  const path = window.location.pathname; 
  let result = path.slice(0, 10);
  console.log(path)
  console.log(result)
  
  const Recepy: React.FC<IRecepy> = ({
    name,
    adress,
    workingHours,
    image,

    id
  }) => {
    return (
      <Grid item xs={12} >
        <CardActionArea component="a" href={"/hairsalon/"+id}>
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {adress}
              </Typography>
                              
              
              <Typography variant="subtitle1" color="primary">
              {workingHours}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 480, display: { xs: "none", sm: "block" } }}
              image={image}
              alt="Nuotrauka"
            />
          </Card>
        </CardActionArea>       
      </Grid>
    );
  };
  
  export default Recepy;