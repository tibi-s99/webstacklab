<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
<html>
            <head>
                <style>
                .Lists
                {
                margin-left:auto;
                margin-right:auto;
                }
            div
            {
                text-align:center;
                width:48%;
            }
            td,th
            {
                font-size:larger;
                padding:20px;
                text-align:center !important;
            }
                </style>
            </head>
            <body>
                <h1 style="text-align:center;">MUSITRACKS</h1>
                <h2 style="text-align:center;">Latest Hits Up For You!!</h2>
                <div class='Lists'>
                    <h2>Download Here!</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#ff99ff">
                            <th style="text-align:left">Songs</th>
                            <th style="text-align:left">Artists</th>
                            <th style="text-align:left">File Size(in MB)</th>
                            <th style="text-align:left">Price(in Rs.)</th>
                            <th style="text-align:left">Download</th>
                        </tr>
                        <xsl:for-each select="musics/music">
                            <tr>
                                <td>
                                    <xsl:value-of select="song"/>
                                </td>
                                <td>
                                    <xsl:value-of select="artist"/>
                                </td>
                                <td>
                                    <xsl:value-of select="size"/>
                                </td>
                                <td>
                                    <xsl:value-of select="price"/>
                                </td>
                                <td>
                                    <xsl:value-of select="download"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
	</xsl:template>
</xsl:stylesheet>