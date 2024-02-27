import { FinDataItemColored, useFinData } from "../hooks/useFinData.ts";
import { Box, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledButton = styled(Button)<{ isactive: string }>`
  cursor: pointer;
  width: 100%;
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  background: ${({ isactive }) => (isactive === "true" ? "yellow" : "#E1E1E1")};
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  &:hover {
    background: ${({ isactive}) => (isactive === "true" ? "yellow" : "#E1E1E1")};
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
            <StyledButton
              onClick={handleOnclickTickerSorter}
              isactive={isActiveTicker ? "true" : "false"}
            >
              Ticker
            </StyledButton>
          </Grid>
          <Grid item xs={1} sx={{ fontWeight: "bold" }}>
            <StyledButton onClick={handleOnclickPrice} isactive={isActivePrice ? "true" : "false"}>
              Price
            </StyledButton>
          </Grid>
          <Grid item xs={1} sx={{ fontWeight: "bold" }}>
            <StyledButton
              onClick={handleOnclickAssetClass}
              isactive={isActiveAssetClass ? "true" : "false"}
            >
              {" "}
              Asset Class
            </StyledButton>
          </Grid>

          {finDataItemColored.map((item: FinDataItemColored, index: number) => (
            <React.Fragment key={`${item.ticker}-${item.price}`}>
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
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
