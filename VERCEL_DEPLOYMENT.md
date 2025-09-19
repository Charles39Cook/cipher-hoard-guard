# Vercel Deployment Guide for Cipher Hoard Guard

This guide provides step-by-step instructions for deploying the Cipher Hoard Guard application to Vercel.

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step 1: Prepare the Repository

1. Ensure all code is committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

## Step 2: Connect to Vercel

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project" or "Import Project"
   - Select "Import Git Repository"
   - Choose `Charles39Cook/cipher-hoard-guard` from the list
   - Click "Import"

## Step 3: Configure Build Settings

1. **Framework Preset**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. **Root Directory**
   - Leave as default (root of repository)

## Step 4: Set Environment Variables

In the Vercel dashboard, go to the project settings and add these environment variables:

### Required Environment Variables

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=your_rpc_url_here
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id_here
VITE_INFURA_API_KEY=your_infura_key_here
```

### How to Add Environment Variables

1. In your Vercel project dashboard
2. Go to "Settings" tab
3. Click "Environment Variables" in the sidebar
4. Add each variable:
   - **Name**: `VITE_CHAIN_ID`
   - **Value**: `11155111`
   - **Environment**: Production, Preview, Development
   - Click "Save"

   Repeat for all variables above.

## Step 5: Deploy

1. **Automatic Deployment**
   - Vercel will automatically deploy when you push to the main branch
   - You can also trigger a manual deployment from the dashboard

2. **Manual Deployment**
   - Go to the "Deployments" tab
   - Click "Redeploy" on the latest deployment
   - Or click "Deploy" to create a new deployment

## Step 6: Verify Deployment

1. **Check Build Logs**
   - Go to the "Functions" tab to see build logs
   - Ensure there are no build errors

2. **Test the Application**
   - Visit the provided Vercel URL
   - Test wallet connection
   - Verify all features work correctly

## Step 7: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - No additional configuration needed

## Step 8: Environment-Specific Configuration

### Production Environment
- All environment variables should be set
- Use production RPC URLs
- Ensure contract addresses are correct

### Preview Environment
- Same as production but with preview URLs
- Useful for testing before production deployment

### Development Environment
- Local development settings
- Use testnet configurations

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables Not Working**
   - Ensure variables start with `VITE_`
   - Check that variables are set for all environments
   - Redeploy after adding new variables

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check RPC URL is accessible
   - Ensure chain ID matches

### Build Commands

If you need to run build commands manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

## Monitoring and Analytics

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor performance and usage

2. **Error Tracking**
   - Check function logs in Vercel dashboard
   - Monitor for runtime errors

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to repository
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **API Keys**
   - Keep Infura API keys secure
   - Monitor usage and set limits
   - Use different keys for different environments

## Performance Optimization

1. **Build Optimization**
   - Enable Vercel's automatic optimizations
   - Use CDN for static assets
   - Optimize images and assets

2. **Caching**
   - Vercel automatically handles caching
   - Configure cache headers if needed

## Rollback Strategy

1. **Previous Deployments**
   - Vercel keeps deployment history
   - Easy to rollback to previous versions
   - Go to "Deployments" tab and click "Promote"

2. **Branch-based Deployments**
   - Use different branches for different environments
   - Test on preview deployments first

## Support and Documentation

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)

## Final Checklist

- [ ] Repository is connected to Vercel
- [ ] Build settings are configured correctly
- [ ] All environment variables are set
- [ ] Application builds successfully
- [ ] Wallet connection works
- [ ] All features are functional
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active
- [ ] Analytics are enabled
- [ ] Error monitoring is set up

## Deployment URL

Once deployed, your application will be available at:
`https://cipher-hoard-guard.vercel.app` (or your custom domain)

## Next Steps

1. Test all functionality thoroughly
2. Set up monitoring and alerts
3. Configure custom domain if needed
4. Set up CI/CD for automatic deployments
5. Monitor performance and usage
6. Plan for scaling if needed

---

**Note**: This deployment guide assumes you have the necessary permissions and access to both GitHub and Vercel. If you encounter any issues, refer to the official documentation or contact support.
