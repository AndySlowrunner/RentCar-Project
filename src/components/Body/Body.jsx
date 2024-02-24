import { Body, Container, Content, Features, Footer, FooterLink, FooterNav, FooterText, Hero, Item, ItemText, List, Section, SectionContent, SectionImage, SectionTitle, Text, Title } from './Body.styled';
import image from '../../imeges/image1.png';

const Main = () => {
  return (
    <Body>
      <Hero>
        <Container>
          <Content>
            <Title>Book with the best car rental brands at lower prices!</Title>
            <Text>
              We offer you the best possible deals from the top international
              and major local car rental companies across the world. We at
              CarFlexi.com go the extra mile to give you the best, carefree car
              rental experience!
            </Text>
          </Content>
        </Container>
      </Hero>
      <Features>
        <Item>
          <h3>Flexible Booking Process</h3>
          <ItemText>
            No need for huge up-front costs. Search for the best deal for you
            and book it with only a small advance payment, you will pay the
            remaining amount during the car pickup time.
          </ItemText>
        </Item>
        <Item>
          <h3>Free Extras & Cancellation</h3>
          <ItemText>
            In case your plans change you can cancel or do minor modifications
            for free up to 48 hours before your rental starts. We will also
            include all special offers, and surcharges from our partners on the
            final price.
          </ItemText>
        </Item>
        <Item>
          <h3>Quality & Expertise</h3>
          <ItemText>
            We constantly evaluate our partners in the level of service they
            provide in each location so we can ensure the quality of service you
            will receive.
          </ItemText>
        </Item>
      </Features>
      <SectionTitle>
        <h2>Tips for renting car</h2>
      </SectionTitle>
      <Section>
        <SectionImage src={image} alt="mustang" />
        <SectionContent>
          <h3>The best ways to find the cheapest car rental deals</h3>
          <List>
            <li>
              1. Look for online discounts and coupons. You can often find
              coupons on car rental websites or by searching Google for budget
              car rental discount codes.
            </li>
            <li>
              2. Try to be flexible with your dates and times. You may be able
              to get a cheaper rate if you pick up or drop off your car outside
              of peak times.
            </li>
            <li>3. Compare rates from different companies.</li>
            <h3>
              How to avoid a collision damage waiver (CDW) charge when you rent
              a car
            </h3>
            <li>
              1. Research the rental car company's policies on CDW charges
              before you book.
            </li>
            <li>
              2. Choose a rental car company that offers collision coverage as
              part of their standard package.
            </li>
            <li>
              3. Purchase your own collision insurance coverage before you rent
              the car.
            </li>
            <li>
              4. Use a credit card that provides rental car insurance coverage.
            </li>
            <li>
              5. Keep your receipts and any documentation from the rental car
              company in case you need to file a claim later.
            </li>
          </List>
          <p> </p>
        </SectionContent>
      </Section>
      <Footer>
        <FooterNav>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/catalog">Catalog</FooterLink>
          <FooterLink to="/favorites">Favorites</FooterLink>
        </FooterNav>
        <FooterText>
          <p> 2024 All rights reserved. Created by Andy Slowrunner</p>
        </FooterText>
      </Footer>
    </Body>
  );
};

export default Main;