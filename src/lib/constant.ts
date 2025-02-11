export enum RequestMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH',
	OPTIONS = 'OPTIONS',
	HEAD = 'HEAD',
	CONNECT = 'CONNECT',
	TRACE = 'TRACE'
}

export enum PostVisibilty {
  Private = 'private',
  public = 'public',
  Unlisted = 'unlisted',
}

export enum PostType {
  CaseStudy = 'casestudy',
  Ideas = 'idea',
  Series = 'serie',
}

export enum CategoryType {
  Business = 'business',
}

export enum Interval {
  Hour = 'hourly',
  Day = 'daily',
  Months = 'monthly',
  Years = 'yearly',
}

export enum TeamSize {
  Sole = '1',
  Micro = '2_10',
  Small = '11_49',
  Medium = '50_249',
  Large = '250_'
}

export enum RevenueModels {
  Advertising = 'advertising',
  SaaS = 'saas',
  Transaction = 'transaction',
  Contract = 'contract',
  Subscription = 'subscription',
  Licensing = 'licensing',
  Freemium = 'freemium',
  Sponsorship = 'sponsorship',
  Data = 'data',
  Commission = 'commission',
  Hybrid = 'hybrid',
  Usage = 'usage',
  Rent = 'rent',
  Lease = 'lease',
  Other = 'other',
}

export enum CustomerTypes {
  B2B = 'b2b',
  B2C = 'b2c',
  C2C = 'c2c',
}

export enum FundingType {
  SelfFunded = 'self funded',
  Bootstrap = 'bootstrap',
  VentureCapital = 'venture capital',
  Crowdfunding = 'crowdfunding',
  PrivateEquity = 'private equity',
  Pool = 'pool',
  ExternalPartner = 'external partner',
  Loan = 'loan',
  AngelInvestor = 'angel investor',
  Incubator = 'incubator',
  Accelerator = 'accelerator',
  Grant = 'grant',
  GovernmentGrant = 'government grant',
  TaxCredit = 'tax credit',
  MezzanineFinancing = 'mezzanine financing',
  AssetBasedFinancing = 'asset based financing',
  InvoiceFinancing = 'invoice financing',
  Factoring = 'factoring',
  Leasing = 'leasing',
  LineOfCredit = 'line of credit',
  MerchantCashAdvance = 'merchant cash advance',
  Microloan = 'microloan',
  PeerToPeerLending = 'peer to peer Lending',
  RevenueBasedFinancing = 'revenue based financing',
  RoyaltyBasedFinancing = 'royalty based financing',
  InitialPublicOffering = 'initial public fffering',
  InitialCoinOffering = 'initial coin offering',
  DirectPublicOffering = 'direct public offering',
  FamilyOffice = 'family office',
  HedgeFund = 'hedge fund',
  PrivateDebt = 'private debt',
  RealEstateInvestmentTrust = 'real estate investment trust',
  JointVenture = 'joint venture',
}

export enum GrowthChannel {
  SocialMedia = 'social media',
  ContentMarketing = 'content marketing',
  PaidAdvertising = 'paid advertising',
  EmailMarketing = 'email marketing',
  ReferralMarketing = 'referral',
  InfluencerMarketing = 'influencer',
  AffiliateMarketing = 'affiliate',
  SearchEngineOptimization = 'search engine optimization',
  GoogleAds = 'google',
  FacebookAds = 'facebook',
  LinkedInAds = 'linkedIn',
  TwitterAds = 'twitter',
  InstagramAds = 'instagram',
  YouTubeAds = 'youTube',
  Advertising = 'advertising',
  OutdoorAdvertising = 'outdoor advertising',
  DigitalAdvertising = 'digital advertising',
  PodcastAdvertising = 'podcast advertising',
  Sponsorships = 'sponsorships',
  Events = 'events',
  TradeShows = 'trade shows',
  Webinars = 'webinars',
  Acquisitions = 'acquisitions',
  Partnerships = 'partnerships',
  StrategicPartnerships = 'strategic partnerships',
  JointVentures = 'joint ventures',
  ResellerPrograms = 'reseller programs',
  CustomerAdvocacy = 'customer advocacy',
  WordOfMouth = 'word of mouth',
  PublicRelations = 'public relations',
  CommunityBuilding = 'community building',
  Forum = 'forum',
  GuestBlogging = 'guest blogging',
  OnlineDirectories = 'online directories',
  CustomerSuccess = 'customer success',
  AccountManagement = 'account management',
  Upselling = 'upselling',
  CrossSelling = 'cross selling',
  Retargeting = 'retargeting',
  WinBack = 'win back',
  LoyaltyPrograms = 'loyalty programs',
  Gamification = 'gamification',
  ViralMarketing = 'viral marketing',
  UserGeneratedContent = 'user generated content',
  Contests = 'contests',
  Giveaways = 'giveaways',
  Airdriops = 'airdrops',
  FreeTrials = 'free trials',
  Demos = 'demos',
  Freemium = 'freemium',
  OpenSource = 'open source',
}