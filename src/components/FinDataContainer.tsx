import { FinDataItem, useFinData } from "../hooks/useFinData.ts";
import { Box, Container, Grid } from "@mui/material";



export function FinDataContainer() {
  const {
    finData,
    handleOnclickPrice,
    handleOnclickAssetClass,
    handleOnclickTickerSorter,
  } = useFinData();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          margin: "2rem auto",
          border: "1px solid lightgray",
          borderRadius: "4px",
        }}
      >
        <Grid container columns={3} spacing={1}>
          <Grid item xs={1} sx={{ fontWeight: "bold" }}>
            Ticker
          </Grid>
          <Grid item xs={1} sx={{ fontWeight: "bold" }}>
            Price
          </Grid>
          <Grid item xs={1} sx={{ fontWeight: "bold" }}>
            Asset Class
          </Grid>

          {finData.map((item: FinDataItem) => (
            <>
              <Grid item xs={1} key={item.ticker}>
                {item.ticker}
              </Grid>
              <Grid item xs={1}>
                {item.price}
              </Grid>
              <Grid item xs={1}>
                {item.assetClass}
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <button onClick={handleOnclickPrice}>sort by price</button>
      <button onClick={handleOnclickAssetClass}>sort by asset Credit</button>
      <button onClick={handleOnclickTickerSorter}>sort by asset Ticker</button>
    </Container>
  );
}
