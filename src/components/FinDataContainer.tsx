import { FinDataItemColored, useFinData } from "../hooks/useFinData.ts";
import { Box, Button, Container, Grid } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const StyledButton = styled(Button)<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  background: ${({ isActive }) => (isActive ? "yellow" : "#E1E1E1")};
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  &:hover {
    background: ${({ isActive }) => (isActive ? "yellow" : "#E1E1E1")};
  }
`;

export function FinDataContainer() {
  const {
    isActivePrice,
    isActiveAssetClass,
    isActiveTicker,
    finDataItemColored,
    handleOnclickPrice,
    handleOnclickAssetClass,
    handleOnclickTickerSorter,
  } = useFinData();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "2rem auto",
            border: "1px solid lightgray",
            borderRadius: "4px",
          }}
        >
          <Grid container columns={3} spacing={1}>
            <Grid item xs={1} sx={{ fontWeight: "bold"}}>
              <StyledButton
                onClick={handleOnclickTickerSorter}
                isActive={isActiveTicker}
              >
                Ticker
              </StyledButton>
            </Grid>
            <Grid item xs={1} sx={{ fontWeight: "bold" }}>
              <StyledButton
                onClick={handleOnclickPrice}
                isActive={isActivePrice}
              >
                Price
              </StyledButton>
            </Grid>
            <Grid item xs={1} sx={{ fontWeight: "bold" }}>
              <StyledButton
                onClick={handleOnclickAssetClass}
                isActive={isActiveAssetClass}
              >
                {" "}
                Asset Class
              </StyledButton>
            </Grid>

            {finDataItemColored.map((item: FinDataItemColored) => (
              <>
                <Grid
                  item
                  xs={1}
                  key={item.ticker}
                  sx={{ backgroundColor: item.rowColor }}
                >
                  {item.ticker}
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    color: item.priceColor,
                    backgroundColor: item.rowColor,
                  }}
                >
                  {item.price}
                </Grid>
                <Grid item xs={1} sx={{ backgroundColor: item.rowColor }}>
                  {item.assetClass}
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
